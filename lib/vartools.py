# lib.vartools
import re
from string import letters
import random
import hashlib
import hmac

secret = 'movethistoanimport'

USER_RE = re.compile(r"^[a-zA-Z0-9_-]{3,30}$")
EMAIL_RE = re.compile(r'^[\S]+@[\S]+\.[\S]+$')
PASS_RE = re.compile(r"^.{3,20}$")

def valid_username(username):
    return username and USER_RE.match(username)

def valid_password(password):
    return password and PASS_RE.match(password)

def valid_email(email):
    return EMAIL_RE.match(email)


def make_secure_val(val):
    return '%s|%s' % (val, hmac.new(secret, val).hexdigest())

def make_secure_eval(val):
    return '%s;%s' % (val, hmac.new(secret, val).hexdigest())

def check_secure_val(secure_val):
    val = secure_val.split('|')[0]
    if secure_val == make_secure_val(val):
        return val

def check_secure_eval(secure_val):
    val = secure_val.split(';')[0]
    if secure_val == make_secure_val(val):
        return val

def render_post(response, post):
    response.out.write('<b>' + post.subject + '</b><br>')
    response.out.write(post.content)

def make_salt(length = 5):
    return ''.join(random.choice(letters) for x in xrange(length))

def make_pw_hash(name, pw, salt = None):
    if not salt:
        salt = make_salt()
    h = hashlib.sha256(name + pw + salt).hexdigest()
    return '%s,%s' % (salt, h)

def valid_pw(name, password, h):
    salt = h.split(',')[0]
    return h == make_pw_hash(name, password, salt)



from urllib.request import urlopen
from urllib.parse import urlencode

url = "https://127.0.0.1:8888/cgi-bin/cgi_server.py"

data = {
    "name" : "kim",
    "email" : "kim@gamil.com",
    "url" : "https://www.naver.com",
}

encData = urlencode(data)
postData = encData.encode('ascii')

f= urlencode(url, postData)
print(f.read().decode('cp949'))
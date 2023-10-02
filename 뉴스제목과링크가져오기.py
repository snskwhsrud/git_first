import requests
from bs4 import BeautifulSoup
import pyautogui

keyword = pyautogui.prompt("검색어를 입력하세요")
response = requests.get(f"https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=0&acr=1&acq=%EC%82%BC&qdt=0&ie=utf8&query={keyword}")
html = response.text

BeautifulSoup(html, "html.parser")
html = response.text
soup = BeautifulSoup(html, 'html.parser')
links = soup.select(".news_tit") # 결과는 리스트로 나옴 
for link in links:
    title = link.text # 태그 안에 텍스트요소를 가져온다
    url = link.attrs['href'] # href의 속성값을 가져온다
    print(title,url)

from urllib.request import urlopen
f = urlopen("https://www.example.com")
print(f.read(500).decode('utf-8'))

date = "langyage=python&framework=django"
f = urlopen('https://127.0.0.1:8000', bytes(date, encoding='utf-8'))
print(f.read().decode('utf-8'))


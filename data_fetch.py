import requests
from bs4 import BeautifulSoup

url = 'https://today.wisc.edu/events/month/2024-01.rss2'

# URL에서 RSS 피드 가져오기
response = requests.get(url)
if response.status_code == 200:
    rss_content = response.text

    # BeautifulSoup을 사용하여 XML 파싱
    soup = BeautifulSoup(rss_content, 'xml')

    # 채널 정보 가져오기
    channel_title = soup.find('title').text
    channel_link = soup.find('link').text
    channel_description = soup.find('description').text

    print('Channel Title:', channel_title)
    print('Channel Link:', channel_link)
    print('Channel Description:', channel_description)

    # 각 아이템의 정보 가져오기
    items = soup.find_all('item')
    for item in items:
        title = item.find('title').text
        description = item.find('description').text
        date = item.find('dc:date').text
        pub_date = item.find('pubDate').text
        link = item.find('link').text

        print('Title:', title)
        print('Description:', description)
        print('Date:', date)
        print('Pub Date:', pub_date)
        print('Link:', link)
        print('---')

else:
    print('Failed to fetch the RSS feed. Status code:', response.status_code)
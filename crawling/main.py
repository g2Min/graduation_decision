from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
import requests
from bs4 import BeautifulSoup
from html_table_parser import parser_functions
import pandas as pd
# import no_connection_test

# 드라이버 초기화
driver = webdriver.Chrome()

url = "https://ai.dongguk.edu/page/30427"

try:
    driver.get(url)
    element = WebDriverWait(driver, 10) # request wait 걸기
    html = driver.page_source # page_source 얻기
    soup = BeautifulSoup(html, 'html.parser') # get html

    data = soup.select_one('.tbl') 
    table = parser_functions.make2d(data)
    df = pd.DataFrame(data=table[1:], columns=table[0])
    print(df)

    # table = soup.select_one('.tbl') # table select
    # get_table_text = parser_functions.make2d(table) # table parsing
    # print(get_table_text)

    # for index, get in enumerate(get_table_text, 1):
    #     print('{}번째 {}데이터'.format(index, get))
        
    #     # dict로 만들기
    #     result = {

    #     }

        # no_connection_test.post(result)

finally:
    driver.quit()
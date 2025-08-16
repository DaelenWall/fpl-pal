import requests
from bs4 import BeautifulSoup
import pandas as pd

def scrape_and_rank(position):
    url = "https://fbref.com/en/comps/9/Premier-League-Stats"
    headers = {"User-Agent": "Mozilla/5.0"}
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    table = soup.find('table', {'id': 'stats_standard'})
    if table is None:
        return []

    df = pd.read_html(str(table))[0]

    # Fill missing stats with 0 and convert to numeric safely
    for col in ['Gls', 'xG', 'Sh']:
        if col in df.columns:
            df[col] = pd.to_numeric(df[col], errors='coerce').fillna(0)
        else:
            df[col] = 0

    # Simple scoring formula (customize this!)
    df['Score'] = df['Gls'] * 0.5 + df['xG'] * 0.3 + df['Sh'] * 0.2
    df = df.sort_values('Score', ascending=False)

    return df[['Player', 'Pos', 'Squad', 'Gls', 'xG', 'Sh', 'Score']].to_dict(orient='records')

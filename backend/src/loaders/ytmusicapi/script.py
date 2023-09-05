import sys
import json
from ytmusicapi import YTMusic
ytmusic = YTMusic()

def search(payload):
    result = ytmusic.search(query=payload['query'], filter=payload['filter'])
    return result


def getSong(payload):
    result = ytmusic.get_song(videoId=payload['id'])
    return result


def getLyrics(payload):
    result = ytmusic.get_lyrics(browseId=payload['id'])
    return result

# print(ytmusic.get_lyrics(browseId="rn4mVQswfNg"))

def getArtist(payload):
    result = ytmusic.get_artist(channelId=payload['id'])
    return result


def getAlbum(payload):
    result = ytmusic.get_album(browseId=payload['id'])
    return result


def getPlaylist(payload):
    result = ytmusic.get_playlist(playlistId=payload['id'])
    return result


def getWatchlist(payload):
    result = ytmusic.get_watch_playlist(videoId=payload['id'])
    return result


while True:
    # Read a line of input from the Node.js process
    input = sys.stdin.readline()
    data = json.loads(input)


    result = {}

    result = locals()[data['action']](data['payload'])

    response = {}
    response['data'] = result
    response['requestId'] = data['requestId']

    print(json.dumps(response))
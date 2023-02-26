import requests
import json

data_path = "data.txt"
BASE_URL = "http://127.0.0.1:3000/"


class Restaurant:
    def __init__(self, name, image, rating, rest_type, adresse):
        self.name = name.replace("\n", "")
        self.image = image.replace("\n", "")
        self.rating = rating.replace("\n", "")
        self.user = "63fa898700cf19c0a7b9e658"
        self.categories = [str(rest_type).replace("\n", "")]
        self.adress = str(adresse).replace("\n", "")

    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__,
                          sort_keys=True, indent=4)

class PointEncoder(json.JSONEncoder):
    def default(self, obj):
            return [obj.name, obj.image, obj.user, obj.categories, obj.adress]

Restaurants = []


def read_data(path):
    file = open(path, "r")
    nb_restaurant = int(file.readline())
    for i in range(nb_restaurant):
        file.readline()
        name = file.readline()
        image = file.readline()
        rating = file.readline()
        rest_type = file.readline()
        adresse = file.readline()
        rest = Restaurant(name, image, rating, rest_type, adresse)
        Restaurants.append(rest)
    file.close()


read_data(data_path)

headers = {'Content-Type': 'application/x-www-form-urlencoded'}

#looping on restaurant to senf them
for i in range(len(Restaurants)):
    response = requests.post(BASE_URL + 'api/restaurant/', data=Restaurants[i].__dict__, headers=headers)
    print(response)

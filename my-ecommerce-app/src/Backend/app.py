from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)#, origins=["http://localhost:5000"])

users = []

products = [
    {
        "id": 1,
        "name": "Product 1",
        "description": "Description for Product 1",
        "price": 10.99,
        "image": 'images/product1.png'
    },
    {
        "id": 2,
        "name": "Product 2",
        "description": "Description for Product 2",
        "price": 20.99,
        "image": 'images/product2.jpg'
    },
    {
        "id": 3,
        "name": "Product 3",
        "description": "Description for Product 3",
        "price": 10.99,
        "image": 'images/product3.jpg'
    },
    {
        "id": 4,
        "name": "Product 4",
        "description": "Description for Product 4",
        "price": 10.99,
        "image": 'images/product4.jpg'
    },
    {
        "id": 5,
        "name": "Product 5",
        "description": "Description for Product 5",
        "price": 10.99,
        "image": 'images/product5.jpg'
    },
    {
        "id": 6,
        "name": "Product 6",
        "description": "Description for Product 6",
        "price": 10.99,
        "image": 'images/product6.jpg'
    },
    {
        "id": 7,
        "name": "Product 7",
        "description": "Description for Product 7",
        "price": 10.99,
        "image": 'images/product7.jpg'
    },
    {
        "id": 8,
        "name": "Product 8",
        "description": "Description for Product 8",
        "price": 10.99,
        "image": 'images/product8.jpg'
    },
    {
        "id": 9,
        "name": "Product 9",
        "description": "Description for Product 9",
        "price": 10.99,
        "image": 'images/product9.jpg'
    },
    {
        "id": 10,
        "name": "Product 10",
        "description": "Description for Product 10",
        "price": 10.99,
        "image": 'images/product10.jpg'
    }
]

@app.route('/signup', methods=['POST'])
def register():
    information = request.json
    username = information.get('username')
    password = information.get('password')
    email = information.get('email')
    if any(user['username'] == username for user in users):
        return jsonify({'message': 'This username already exists'})
    users.append({'username': username, 'password': password, 'email': email})
    return jsonify({'message': 'This user has been successfully registered'})

@app.route('/login', methods=['POST'])
def registerUser():
    new_user = request.get_json()
    if "email" in new_user:
        new_username = new_user.get('username')
        for user in users:
            if user['username'] == new_username:
                return jsonify({"errorMessage": "This username has already been taken"})
        users.append(new_user)
        return jsonify({"errorMessage": "Signup was successful!"})
    else:
        test_username = new_user.get('username')
        test_password = new_user.get('password')
        for user in users:
            print(user)
            if user['username'] == test_username and user['password'] == test_password:
                return(jsonify({"authenticated": True, "authMessage": "Authentication was successful"}))
        return jsonify({"authenticated": False, "authMessage": "The username or password is incorrect"})

@app.route('/products', methods=['GET'])
def productsinfo():
    return products

if __name__ == '__main__':
    app.run()

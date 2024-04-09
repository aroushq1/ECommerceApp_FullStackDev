# Importing necessary modules
from flask import Flask, request, jsonify
from flask_cors import CORS

# Creating Flask app instance
app = Flask(__name__)

# Enabling CORS for all routes
CORS(app)

# Initializing empty lists to store user and product data
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
# Route to handle user registration
@app.route('/signup', methods=['POST'])
def register():
    information = request.json
    username = information.get('username')
    password = information.get('password')
    email = information.get('email')
    
    # Checking if the username already exists in the users list
    if any(user['username'] == username for user in users):
        return jsonify({'message': 'This username already exists.'})
    
    # Adding the new user to the users list
    users.append({'username': username, 'password': password, 'email': email})
    return jsonify({'message': 'This user has been successfully registered!'})

# Route to handle user login
@app.route('/login', methods=['POST'])
def registerUser():
    new_user = request.get_json()
    
    # Checking if the login request contains email (indicating signup)
    if "email" in new_user:
        new_username = new_user.get('username')
        
        # Checking if the username is already taken
        for user in users:
            if user['username'] == new_username:
                return jsonify({"errorMessage": "This username has already been taken"})
        
        # Adding the new user to the users list
        users.append(new_user)
        return jsonify({"errorMessage": "Signup was successful!"})
    else:
        # Handling login attempt with username and password
        test_username = new_user.get('username')
        test_password = new_user.get('password')
        
        # Authenticating the user
        for user in users:
            if user['username'] == test_username and user['password'] == test_password:
                return(jsonify({"authenticated": True, "authMessage": "Authentication was successful"}))
        return jsonify({"authenticated": False, "authMessage": "The username or password is incorrect"})

# Route to retrieve product information
@app.route('/products', methods=['GET'])
def productsinfo():
    return jsonify(products)

# Default route
@app.route('/')
def home():
    return "Welcome to the Flask API"

# Running the Flask app
if __name__ == '__main__':
    app.run()

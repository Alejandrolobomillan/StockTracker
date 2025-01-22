import time
import random
from pymongo import MongoClient
from bson import ObjectId

# Conexión a MongoDB
client = MongoClient('mongodb://localhost:27017')  
db = client['stocktracker']
stocks_collection = db['stocks'] 

# Lista de variaciones posibles para el precio
price_variations = [0.15, 0.25, 0.35, 0.5, 0.65, 0.75, 1, 1.15, 1.25, 1.5, 1.65, 1.75, 2, 5, 10, 30, 50]

# Función para actualizar el precio de las acciones
def update_stock_prices():
    # Obtener las acciones de la base de datos
    stocks = list(stocks_collection.find())
    
    for stock in stocks:
        # Obtener el precio actual
        current_price = stock['currentPrice']
        
        # Elegir una variación aleatoria y un signo (+ o -)
        variation = random.choice(price_variations)
        sign = random.choice([1, -1])  # Elegir +1 o -1
        
        # Calcular el nuevo precio
        price_change = sign * variation
        new_price = current_price + price_change
        
        # Comprobar si el nuevo precio es negativo
        if new_price < 0:
            print(f"Acción: {stock['companyName']} ({stock['tickerSymbol']}) no se actualiza porque el precio es negativo.")
            continue  # No actualizar el precio si es negativo
        
        # Actualizar el precio en la base de datos
        stocks_collection.update_one(
            {'_id': ObjectId(stock['_id'])},
            {'$set': {'currentPrice': round(new_price, 2)}}
        )
        
        print(f"Acción: {stock['companyName']} ({stock['tickerSymbol']}), Nuevo Precio: {round(new_price, 2)}")

# Función principal para ejecutar el script cada 30 segundos
def main():
    while True:
        update_stock_prices()
        time.sleep(10)  # Esperar 30 segundos

if __name__ == "__main__":
    main()

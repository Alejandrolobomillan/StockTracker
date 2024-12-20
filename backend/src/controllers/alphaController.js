const axios = require('axios');
// Clave de API de Alpha Vantage
const ALPHA_VANTAGE_API_KEY = 'KF24YTO8QLAUUJEX';

// Controlador para obtener datos de una acción específica
const getStockData = async (req, res) => {
    const { symbol } = req.params;

    if (!symbol) {
        return res.status(400).json({ message: 'El símbolo es obligatorio' });
    }

    try {
        const response = await axios.get('https://www.alphavantage.co/query', {
            params: {
                function: 'GLOBAL_QUOTE',
                symbol,
                apikey: ALPHA_VANTAGE_API_KEY,
            },
        });

        const data = response.data;

        // Verificar si Alpha Vantage devolvió un error o datos vacíos
        if (data['Error Message']) {
            return res.status(404).json({ message: 'Símbolo no encontrado en Alpha Vantage' });
        }

        if (!data['Global Quote'] || Object.keys(data['Global Quote']).length === 0) {
            return res.status(404).json({ message: 'No se encontraron datos para el símbolo' });
        }

        // Devolver los datos obtenidos
        res.status(200).json({
            message: 'Datos obtenidos con éxito',
            stockData: data['Global Quote'],
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener datos de Alpha Vantage', error: error.message });
    }
};

module.exports = {
    getStockData,
};

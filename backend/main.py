import flask
from flask import request, jsonify

from services.station_service import get_station_information, get_station_status, get_all_stations

app = flask.Flask(__name__)

app.config["DEBUG"] = True

@app.route('/api/station', methods=['GET'])
def api_get_all_stations():
    stations_info = get_all_stations()
    return jsonify(stations_info)

@app.route('/api/station/<station_id>', methods=['GET'])
def api_get_station(station_id=''):

    station_information = get_station_information(station_id)
    station_status = get_station_status(station_id)

    station = {'information': station_information, 'status': station_status}

    return jsonify(station)

app.run()


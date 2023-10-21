from flask import jsonify, request, g, url_for, current_app
from . import api

@api.post('/bin/<int:id>/collection/')
def add_allocation():
    pass

@api.get('/bin/stat/')
def get_bin_stats():
    pass
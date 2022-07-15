import pyqrcode
import png
from pyqrcode import QRCode

QRString = 'https://www.etefmc.com.br/'

#Cria
url = pyqrcode.create(QRString)

# Salva no local desejado
url.png(r'qr.png', scale=8)
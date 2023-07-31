import os
import cherrypy
from cherrypy import tools
from cherrypy.lib.static import serve_file
import cherrypy_cors

class HelloWorld:
    @cherrypy.expose
    def index(self):
        return serve_file(os.path.abspath('./imagem.dcm'), content_type='application/octet-stream')

if __name__ == '__main__':
    cherrypy_cors.install()

    conf = {
        '/': {
            'tools.sessions.on': True,
            'tools.staticdir.root': os.path.abspath(os.getcwd()),

            # Adding the following lines enable CORS
            'cors.expose.on': True,
        },
    }

    cherrypy.config.update({'server.socket_host': '0.0.0.0',
                            'server.socket_port': 9999})

    cherrypy.quickstart(HelloWorld(), '/', conf)

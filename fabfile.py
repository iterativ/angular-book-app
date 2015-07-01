import os
from fabric.api import *
from fabric.contrib.project import *


def _local_path(*args):
    return os.path.join(os.path.abspath(os.path.dirname(__file__)), *args)


NAME = 'library'

# environments
env.use_ssh_config = True
env.user = 'cloudguru'
env.hosts = ['iterativ.ch']
env.remote_app = '/srv/www/%s' % NAME
env.local_app = _local_path() + '/app'
env.local_dependencies = _local_path() + '/bower_components'
env.remote_dependencies = '/srv/www/%s/%s' % (NAME, 'app')
env.rsync_exclude = ['.settings/',
                     '.project',
                     '.pydevproject',
                     '.externalToolBuilders/',
                     'iterativ.sublime-project',
                     'iterativ.sublime-workspace',
                     'ssl.nginx.conf',
                     'nginx.conf',
                     '.git/',
                     '*.py',
                     '*.pyc',
                     '.keep']


def deploy():

    # build
    # no need for a 
    # local("grunt --force")

    # hack to keep loading image

    # KEEP_IMAGES = ['loading-image-640.gif', 'iterativ-avatar-1200.png']
    #for image in KEEP_IMAGES:
    #    local('cp %s %s' % (os.path.join(_local_path(), 'app', 'images', image),
    #                        os.path.join(env.local_app, 'images')))

    # sources & templates
    sudo('mkdir -p %(remote_app)s' % env)
    print '---------- Local App: %s' % env.local_app
    print '---------- Remote App: %s' % env.remote_app
    rsync_project(
        remote_dir=env.remote_app,
        local_dir=env.local_app,
        exclude=env.rsync_exclude,
        extra_opts='--rsync-path="sudo rsync"'
    )

    print '---------- Local Deps: %s' % env.local_dependencies
    print '---------- Remote Deps: %s' % env.remote_dependencies
    rsync_project(
        remote_dir=env.remote_dependencies,
        local_dir=env.local_dependencies,
        exclude=env.rsync_exclude,
        extra_opts='--rsync-path="sudo rsync"'
    )
    #sudo("chown -R {user}:{user} {remote_app_path}/.".format(user=env.server_user, remote_app_path=env.remote_app))

    put('nginx.conf', os.path.join('/etc/nginx/sites-enabled/%s.conf' % NAME), use_sudo=True)

    sudo("chown -R {user}:{user} {nginx_conf_file}".format(
        user='root',
        nginx_conf_file=os.path.join('/etc/nginx/sites-enabled/%s.conf' % NAME)))

    # don't restart
    sudo('/etc/init.d/nginx restart')


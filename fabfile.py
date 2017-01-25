from fabric.api import run, env, roles, execute, task, cd, local

env.shell = '/bin/sh -c'


@task
def update():
    run('git pull origin master')


@task
def deploy():
    with cd('flexy.studio107.ru'):
        execute(update)
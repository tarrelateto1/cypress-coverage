pipeline {
    agent any

    tools { 
        nodejs "node"
        'org.jenkinsci.plugins.docker.commons.tools.DockerTool' 'docker'
    }

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }
 
    stages {
        stage('Checkout') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/tarrelateto1/cypress-coverage-react.git'
                echo 'Checkout complete'
            }
        }
        stage('Build') {
            steps {
                echo 'Build'
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'Test App.'
                sh 'npm run cypress:ci'
                
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying .....'
                sh 'ls'
                sh 'docker version'
                sh 'docker cp ./build/. apache:/usr/local/apache2/htdocs'
                // cmd_exec('docker cp ./build/. apache:/usr/local/apache2/htdocs')
            }
        }
    }
}

pipeline {
    agent any
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
                echo 'Build',
                nodejs(nodeJSInstallationName: 'nodejs') {
                    sh 'npm config ls'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Test App.'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy'

            }
        }
    }
}

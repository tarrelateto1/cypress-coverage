pipeline {
    agent any

    tools {nodejs "node"}

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

            }
        }
    }
}

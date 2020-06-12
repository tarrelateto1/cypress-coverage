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
                sh 'zip -r build.zip build/'
                sh 'sshpass -p "Jirawat8" scp -r ./build.zip jirawapr@172.30.120.73:/Users/jirawapr/Downloads'
                sh 'sshpass -p Jirawat8 ssh jirawapr@172.30.120.73'
                sh 'docker cp /Users/jirawapr/Downloads/build/build.zip apache2:/usr/local/apache2/htdocs/'
            }
        }
    }
}

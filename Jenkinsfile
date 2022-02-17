pipeline {
    agent any

    stages {
        stage('Test'){
            steps{
                sh './yarn cy:ci'
            }
            post{
                always {
                    junit 'results/test-output-[hash].xml'
                }
            }
        }
    }
}
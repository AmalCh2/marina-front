pipeline{
    agent any



	stages {


 stage('Getting project from Git') {
            steps{
      			checkout([$class: 'GitSCM', branches: [[name: '*/main']],
			extensions: [],
			userRemoteConfigs: [[url: 'https://github.com/AmalCh2/marina-front.git']]])
            }
        }


        stage('Cleaning the project') {
            steps{
                sh "npm install"
            }
        }





        stage('Artifact Construction') {
            steps{
                sh "ng build  "
            }
        }

stage('Build Docker Image') {
                      steps {
                          script {
                            sh 'docker build -t amalchnitir/marina-front:latest .'
                          }
                      }
                  }




                  stage('login dockerhub') {
                                        steps {
                                      sh 'echo dckr_pat_ir-lMzVJrOrmvNtywS8YwZGdPdg | docker login -u amalchnitir --password-stdin'
                                            }
		  }





	                      stage('Push Docker Image') {
                                        steps {
                                   sh 'docker push amalchnitir/marina-front:latest'
                                            }
		  }


}


}

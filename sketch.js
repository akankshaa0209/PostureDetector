let capture;
let posenet;
let noseX, noseY;
let reyeX, reyeY;
let leyeX, leyeY;
let singlePose, skeleton;

function setup() {
    createCanvas(800, 450);
    capture = createCapture(VIDEO)
    capture.hide();
    
    // //modelLoaded is callback function..object for model
    //create a new posenet method
    //sending vdeo being recorded to ml5.posenet
     posenet = ml5.poseNet(capture, modelLoaded);
     posenet.on('pose',receivedPoses);

     
}




function receivedPoses(poses){
    console.log(poses); 

    if(poses.length > 0){  
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
         //in skeleton we have 2d array 
        // noseX = singlePose.nose.x;
        // noseY = singlePose.nose.y;

        // reyeX = singlePose.rightEye.x;
        // reyeY = singlePose.rightEye.y;

        // leyeX = singlePose.leftEye.x;
        // leyeY = singlePose.leftEye.y;
    }
    // console.log(noseX + " " + noseY);
}
//due to above code coordinates aaenge all time


//when the model is loaded
function modelLoaded() {
    console.log('Model has loaded');
}


function draw() {

   //images and videos(webcam)
    image(capture, 0, 0);
    fill(255,0,0);
    // ellipse(noseX, noseY, 30);
    // ellipse(reyeX, reyeY, 30);
    // ellipse(leyeX, leyeY, 30);
    //ellipse(noseX, noseY, 30,30);
 

  if(singlePose){
    for(let i=0; i<singlePose.keypoints.length; i++){
        ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y, 20);  //path
    }

    stroke(255,255,255);
    strokeWeight(5);
    for(let j=0; j<skeleton.length; j++){
        line(skeleton[j][0].position.x, skeleton[j][0].position.y, 
            skeleton[j][1].position.x, skeleton[j][1].position.y);
    }
    

  }
   
}

//posenet.on('pose',receivedPoses);..event listener with a callback func
//receivedPoses is a callback func which bsiclly meaans when this will happen, code under the receivedposes will execute  function will execute.
//i.e., function will execute on receiving the pose



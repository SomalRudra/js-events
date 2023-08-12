document.addEventListener('DOMContentLoaded', () => {

    const circle = document.getElementById('circle');
    const parent = document.querySelector('.parent');
    const circles = [];
    console.log(parent)

    const makeCircleBiggerPeriodically = (circle) => {
        let diameter = 10;
        let interval;
        console.log('calling circle');
        console.log(circle);
        interval = setInterval(() => {
            diameter += 10;
            circle.style.height = `${diameter}px`;
            circle.style.width = `${diameter}px`;
            circle.style.borderRadius = `${diameter / 2}px`;

            if (diameter === 200) {
                clearInterval(interval);
            }
        }, 10)
    }

    const disappearCircle = () => {
        const height = circle.style.height;
        diameter = height > 0 ? 50 : 0;
        circle.style.height = `${diameter}px`;
        circle.style.width = `${diameter}px`;
        circle.style.borderRadius = `${diameter / 2}px`;
    }

    const customCircle = () => {
        const height = document.getElementById('height');
        const width = document.getElementById('width');
        const radius = document.getElementById('radius');
        const circleCount = document.getElementById('noOfCircles');

        const circleCountInt = parseInt(circleCount.value);
        

        for(let i=0; i<circleCountInt; i++){
            const newCircleDiv = document.createElement('div');
            newCircleDiv.className = 'circle';
            newCircleDiv.style.height = `${height.value}px`;
            newCircleDiv.style.width = `${width.value}px`;
            newCircleDiv.style.borderRadius = `${radius.value / 2}px`;
            newCircleDiv.style.position = 'absolute';
            newCircleDiv.style.backgroundColor = 'black';
            newCircleDiv.style.left = `${Math.random() * (parent.clientWidth - parseInt(width.value))}px`;
            newCircleDiv.style.top = `${Math.random() * (parent.clientHeight - parseInt(height.value))}px`;
            circles.push(newCircleDiv);
            parent.appendChild(newCircleDiv);
        }

        circles.forEach(circle => {
            makeCircleBiggerPeriodically(circle);
        })

        console.log(parent);


    }
    
    makeCircleBiggerPeriodically(circle);
    circle.addEventListener('click', disappearCircle);
    document.getElementById('startBtn').addEventListener('click', customCircle)
})
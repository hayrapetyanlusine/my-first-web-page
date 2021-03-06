window.addEventListener("DOMContentLoaded", () => {

    //date
    setTimeout(function go() {
        const date = new Date();
      
        const day = document.querySelector("#day");
        const month = document.querySelector("#month");
        const year = document.querySelector("#year");
      
        switch (day.innerText = date.getDate(),
          year.innerText = date.getFullYear(),
          month.innerText = date.getMonth()) {
          case 0:
            month.innerHTML = "01";
            break;
          case 1:
            month.innerHTML = "02";
            break;
          case 2:
            month.innerHTML = "03";
            break;
          case 3:
            month.innerHTML = "04";
            break;
          case 4:
            month.innerHTML = "05";
            break;
          case 5:
            month.innerHTML = "06";
            break;
          case 6:
            month.innerHTML = "07";
            break;
          case 7:
            month.innerHTML = "08";
            break;
          case 8:
            month.innerHTML = "09";
            break;
          case 9:
            month.innerHTML = "10";
            break;
          case 10:
            month.innerHTML = "11";
            break;
          case 11:
            month.innerHTML = "12"
        }
      
        const hour = document.querySelector("#hour");
        const minute = document.querySelector("#minute");
        const second = document.querySelector("#second");
      
        hour.innerText = date.getHours();
        minute.innerText = date.getMinutes();
        second.innerText = date.getSeconds();
      
        if (second.innerText < 60) {
          if (second.innerText < 10) {
            second.innerText = "0" + second.innerText;
          }
          if (minute.innerText < 10) {
            minute.innerText = "0" + minute.innerText;
          }
        }
        setTimeout(go, 1000);
      });
      

    //mobile menu
    const menuBtn = document.querySelector(".burger-menu");
    const menu = document.querySelector("#menu");

    menuBtn.addEventListener("click", function () {
        menu.classList.toggle("active-nav");
        menuBtn.classList.toggle("active-nav");
    });

    // scroll up
    const upBtn = document.querySelector(".btn-up");

    function docUp() {
        if(window.scrollY >= 600) {
            upBtn.classList.add("showBtn");
        } else{
            upBtn.classList.remove("showBtn");
        }
    }

    window.addEventListener("scroll", docUp);

    upBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    //canvas animation 

    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    let data = {
        ball: [],
        lines: []
    };

    function update() {
        data.ball.forEach(ball => {
            ball.update();
        });
    }

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        data.ball.forEach(ball => {
            ball.draw();
        });
        data.lines.forEach(line => {
            line.drawLines();
        });
    }

    function Triangle() {
        this.r = 1;
        this.x = random(this.r, canvas.width - this.r);
        this.y = random(this.r, canvas.height - this.r);
    
        this.xDelta = random(-5, 5);
        this.yDelta = random(-5, 5);

        this.color = "#53BB47";

        this.update = function() {
            if ((this.x + this.r) > canvas.width ||
            this.x - this.r < 0) {
            this.xDelta *= -1;
            }
            if ((this.y + this.r) > canvas.height ||
            this.y - this.r < 0) {
            this.yDelta *= -1;
            }

            this.x += this.xDelta;
            this.y += this.yDelta;
        };
    
        this.draw = () => {
            context.fillStyle = this.color;
            context.beginPath();
            context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            context.fill();
        }; 

        this.drawLines = () => {
            let x1, x2, y1, y2, length;

            for(let i in data.ball) {
                for(let j in data.ball) {
                    x1 = data.ball[i].x;
                    x2 = data.ball[j].x;
                    y1 = data.ball[i].y;
                    y2 = data.ball[j].y;
                    length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                    if(length < 170) {
                        context.strokeStyle = this.color;
                        context.beginPath();
                        context.moveTo(x1, y1);
                        context.lineTo(x2, y2);
                        context.stroke();
                    }
                }
            }
        }
    }

    function loop() {
        requestAnimationFrame(loop);
        update();
        draw();
    }
    loop();

    function random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    window.addEventListener("load", () => {
        for(let i = 0; i < 35; i++) {
            const ball = new Triangle();
            data.ball.push(ball);
            data.lines.push(ball);
        }
    });
});
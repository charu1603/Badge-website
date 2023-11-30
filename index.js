const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let image = "";
let shape = "original";
var banner;

const uploadImage = () => {
  document.querySelector("input.profile-input").click();
};

const upload = (e) => {
  if (e && e.target.files && e.target.files[0]) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        image = img;
        draw();
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  }
};

const draw = () => {
  banner = new Image();
  banner.src = "Img/app.png";
  banner.onload = () => {
    if (image) {
      switch (shape) {
        case "original": {
          canvas.width = image.width;
          canvas.height = image.height;
          ctx.drawImage(image, 0, 0);
          break;
        }
        default: {
        
        }
      }
    } else {
      ctx.canvas.width = 550;
      ctx.canvas.height = 550;
      ctx.fillStyle = "#363636";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    const height = (banner.height / banner.width) * canvas.width;
    const y = canvas.height - height;
   
    ctx.drawImage(
      banner,
      0,
      0,
      banner.width,
      banner.height,
      0,
      y,
      canvas.width,
      height
    );

 
  };
};

const download = () => {
  const a = document.createElement("a");
  const url = canvas.toDataURL("image/png;base64");
  a.download = "Asper.png";
  a.href = url;
  a.click();
};

draw();
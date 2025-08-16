import React from "react";
import "../nav.css";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mb-5 mt-5">
      <div className="row">
        <div className="col-5 p-3 mb-5">
          <img style={{ width: "80%" }} src={imageURL} alt="img for Prop"></img>
        </div>

        <div className="col-1"></div>

        <div className="col-6 mt-5 p-3 text-muted">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div className="mb-3">
            <a href={tryDemo} className="none">
              Try Demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            &nbsp;
            &nbsp;
            <a href={learnMore} className="none ">
              Learn More <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>

          <div>
            <a href={googlePlay} style={{ marginRight: "20px" }}>
              <img src="/media/images/googlePlayBadge.svg" alt="img for googlePlay"></img>
            </a>
            <a href={appStore}>
              <img src="/media/images/appstoreBadge.svg" alt="img for appStore"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;

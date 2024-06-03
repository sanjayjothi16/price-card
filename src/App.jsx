import React from 'react'

function App() {
    let data =[
    {
        title: "Free",
        description: [
          "Single User",
          "5GB Storage",
          "Unlimited Public Projects",
          "Community Access",
          "No Unlimited Private Projects",
          "No Dedicated Phone Support",
          "No Free Subdomain",
          "No Monthly Status Reports"
        ],
        price: "$0/month"
      },
      {
        title: "Plus",
        description: [
          "5 Users",
          "50GB Storage",
          "Unlimited Public Projects",
          "Community Access",
          "Unlimited Private Projects",
          "Dedicated Phone Support",
          "Free Subdomain",
          "No Monthly Status Reports"
        ],
        price: "$9/month"
      },
      {
        title: "Pro",
        description: [
          "Unlimited Users",
          "150GB Storage",
          "Unlimited Public Projects",
          "Community Access",
          "Unlimited Private Projects",
          "Dedicated Phone Support",
          "Unlimited Free Subdomains",
          "Monthly Status Reports"
        ],
        price: "$49/month"
      }
    ];
  
    return (
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {data.map((pricing, index) => (
              <div className="col-lg-4" key={index}>
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{pricing.title}</h5>
                    <h6 className="card-price text-center">{pricing.price}</h6>
                    <hr />
                    <ul className="fa-ul">
                      {pricing.description.map((feature, idx) => (
                        <li key={idx} className={feature.startsWith("No") ? "text-muted" : ""}>
                          <span className="fa-li">
                            <i className={`fas ${feature.startsWith("No") ? "fa-times" : "fa-check"}`}></i>
                          </span>
                          {feature.replace("No ", "")}
                        </li>
                      ))}
                    </ul>
                    <div className="d-grid">
                      <a href="#" className="btn btn-primary text-uppercase">Button</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default App

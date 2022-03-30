export default function Answer() {
  return (
    <div>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            {/* <img src="..." class="img-fluid rounded-start" alt="..." /> */}
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <button className="btn btn-primary">Like</button>
                &nbsp; <button className="btn btn-primary">Answer</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

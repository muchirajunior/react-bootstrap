import React from 'react';

function SubscribeCard(props) {
    return (
        <div className="col-md" >
            <h5 className=" font-weight-bold " > Subscribe  Circle <br /> Newsletter </h5>
            <p > subscribe to be the first one to know about the updates. Enter your Email </p>
            <div class="input-group border rounded mb-3">
                <input type="text" class="form-control border-0 bg-transparent text-white" placeholder="enter email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                    <span class="input-group-text bg-white rounded" id="basic-addon2">subscribe</span>
                </div>
            </div>

        </div>
    );
}

export default SubscribeCard;
import React from 'react';

const Project = ({project}) => {
    const {name, img, server, client, live} = project;
    return (
        <div class="card card-compact w-96 bg-primary shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <div class="flex justify-between">
                    <a href={client} class="btn btn-secondary btn-sm">Client-side</a>
                    <a href={server} class="btn btn-secondary btn-sm">Server-side</a>
                    <a href={live} class="btn btn-secondary btn-sm">Live-site</a>
                </div>
            </div>
        </div>
    );
};

export default Project;
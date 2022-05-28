import React from 'react';

const Project = ({project}) => {
    const {name, img, server, client, live} = project;
    return (
        <div className="card card-compact w-96 bg-primary shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="flex justify-between">
                    <a href={client} className="btn btn-secondary btn-sm">Client-side</a>
                    <a href={server} className="btn btn-secondary btn-sm">Server-side</a>
                    <a href={live} className="btn btn-secondary btn-sm">Live-site</a>
                </div>
            </div>
        </div>
    );
};

export default Project;
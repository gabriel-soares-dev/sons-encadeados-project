import { Request, Response } from 'express';

export class PlaylistController{

   
    public home(req:Request,res:Response) {
        res.status(200).send({
            message: 'Get request with successful'
        });
    }

    public addSongToList(req:Request,res:Response){

    }


}
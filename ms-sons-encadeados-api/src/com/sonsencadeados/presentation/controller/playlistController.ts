import { PlaylistService } from 'com/sonsencadeados/application/service/playlistService';
import { Request, Response } from 'express';

export class PlaylistController{

    private playlistService: PlaylistService = new PlaylistService();
   
    public home(res:Response) {
        res.status(200).send({
            message: 'Get request with successful'
        });
    }

    public addSongs(req:Request,res:Response){
        try {

            if (Object.keys(req.body).length === 0) {
                throw new Error('Body is empty!');   
            }

            this.playlistService.addSongs();

        } catch (e) {
            return res.status(400).send(e.message);
        }
    }


}
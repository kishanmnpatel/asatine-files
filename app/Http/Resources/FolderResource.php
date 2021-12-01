<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FolderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $breadcrumbs=collect([]);
        $folder=$this->folder;
        $i=0;
        $breadcrumbs->push(['name'=>$this->name,'hashed_id'=>$this->hashed_id]);
        do {
            if ($folder==null) {
                break;
            }
            $breadcrumbs->push(['name'=>$folder->name,'hashed_id'=>$folder->hashed_id]);
            $folder=$folder->folder;
            $i++;
        } while (1);

        $revercedBreadcrumbs=collect([]);
        for ($i=$breadcrumbs->count()-1; $i >= 0; $i--) {
            $revercedBreadcrumbs->push($breadcrumbs[$i]);
        }
        return [
            'id'=> $this->id,
            'hashed_id'=> $this->hashed_id,
            'parent_id'=> $this->parent_id,
            'user_id'=> $this->user_id,
            'name'=> $this->name,
            'breadcrumbs'=>$revercedBreadcrumbs,
            'folders'=>$this->folders,
            'files'=>$this->files,
        ];
    }
}

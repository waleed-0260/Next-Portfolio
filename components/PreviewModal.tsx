import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Button } from './ui/button'
const PreviewModal = (link:any) => {
  return (
<Dialog>
  <DialogTrigger>
  <Button variant={"outline"} className="rounded-3xl bg-black text-white">Preview website</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[90vw] h-[500px] p-6">
    <DialogHeader>
      <DialogDescription>
      <iframe src={link.link} width="100%" frameBorder="0" className='p-4 h-[480px]'></iframe>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default PreviewModal
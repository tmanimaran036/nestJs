import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('upload')
export class FileUploadingController {
  @Post('image')
  @UseInterceptors( 
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads', //local folders
        filename: (req, file, cb) => {
          const uniqueName = Date.now() + '_' + Math.round(Math.random() * 1e9);
          cb(null, uniqueName + extname(file.originalname));
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/^image\/(jpg|jpeg|png|gif)$/)) {
          return cb(
            new BadRequestException('only image file are allowed( jpg, jpeg, png, gif )!'),
            false,
          );
        }
        cb(null, true);
      },
      limits: { fileSize: 2 * 1024 * 1024 },
     
  }),
  )
  async uploadSingle(@UploadedFile() file: any) {
      
    if(!file){
      throw new BadRequestException('file not uploaded');
    }
    return {
      message: 'File uploaded successfully!',
      fileDetails: {
        originalName: file.originalname,
        filename: file.filename,
        size: file.size,
        mimeType: file.mimetype,
      },
      filePath: `/uploads/${file.filename}`,
    };
  }
}

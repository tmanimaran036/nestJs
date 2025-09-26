import {
  BadRequestException,
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Param,
} from '@nestjs/common';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
// set const variable for storage
const FILE_TYPE = ['image/jpg', 'image/jpeg', 'image/png'];
const FILE_SIZE = 2 * 1024 * 1024;
const UPLOAD_FOLDER = './uploads';

// generateNewName
const generateFileName = (fileName: string) => {
  console.log('file name generate function');
  const timeStamp = Date.now();
  const random = Math.floor(Math.random() * 1e9);
  return `${timeStamp}_${random}${extname(fileName)}`;
};

// fileupload filter

const uploadFilter = (req, file, cb) => {
  console.log('fileFilter function');
  if (!FILE_TYPE.includes(file.mimetype)) {
    return cb(
      new BadRequestException(
        `Invalid file type. Only Allowed types( ${FILE_TYPE.join(', ')})!`,
      ),
      false,
    );
  }
  cb(null, true);
};

console.log('enter a upload controller');
@Controller('uploads')
export class FileUploadingCustomer {
  @Post(':id/images')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: UPLOAD_FOLDER,
        filename: (req, file, cb) =>
          cb(null, generateFileName(file.originalname)),
      }),
      fileFilter: uploadFilter,
      limits: { fileSize: FILE_SIZE },
    }),
  )
  async uploadSingle(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log('enter a upload function');
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }
    (console.log(UPLOAD_FOLDER), console.log(file.filename));
    return {
      message: 'File uploaded successfully!',
      userID: id,
      filePath: `/uploads/${file.filename}`,
    };
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { FileUploadingController } from './file-uploading.controller';

describe('FileUploadingController', () => {
  let controller: FileUploadingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileUploadingController],
    }).compile();

    controller = module.get<FileUploadingController>(FileUploadingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

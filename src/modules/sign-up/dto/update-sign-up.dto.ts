import { PartialType } from '@nestjs/mapped-types';
import { CreateSignUpDto } from './create-sign-up.dto';

export class UpdateSignUpDto extends PartialType(CreateSignUpDto) {
    sign_up_id: number;

}

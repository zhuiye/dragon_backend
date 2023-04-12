import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleInterfaceDto } from './create-role.dto';

export class UpdateRoleInterfaceDto extends PartialType(CreateRoleInterfaceDto) {
    role_id: number;
}

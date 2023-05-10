import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../interfaces/enums/role.enum';

const ROLES_KEY = 'roles';
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);

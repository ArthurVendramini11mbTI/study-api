import type { User } from '../schemas/userSchemas'
import * as z from 'zod'

type User = z.infer<typeof User>


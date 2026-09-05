import * as z from 'zod'

const Time = z.object({
    hours: z.number(),
    minutes: z.number()
})

export const Goal = z.object({
  name: z.string(),
  description: z.string(),
  time: z.object({
    totalTime: Time,
    timeSpent: Time,
  }),
  icon: z.string(),
  color: z.string()
}).transform((data) => {
  const totalMinutes = data.time.totalTime.hours * 60 + data.time.totalTime.minutes

  const spentMinutes = data.time.timeSpent.hours * 60 + data.time.timeSpent.minutes

  const timeLeft = Math.max(totalMinutes - spentMinutes, 0)

  const progress = totalMinutes === 0 ? 0 : Number(Math.min((spentMinutes / totalMinutes) * 100, 100)).toFixed(2)

  return {
    ...data,

    time: {
      ...data.time,
      timeLeft,
    },

    progress,
  }
})

export const User = z.object({
    email: z.email(),
    password: z.string(),
    name: z.string().optional(),
    goals: z.array(Goal).optional()
})


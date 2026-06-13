import { createClient } from '@supabase/supabase-js'

// 💡 Ganti teks di bawah ini dengan URL dan Key asli dari Supabase kamu ya!
const supabaseUrl = 'https://ldaquimaaxgdgcsrjjqk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkYXF1aW1hYXhnZGdjc3JqanFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNDU4ODksImV4cCI6MjA5NjkyMTg4OX0.UoHPSNn86qjH_gE-03vogtc6YBfP45SmXFbigqxmqhU'

export const supabase = createClient(supabaseUrl, supabaseKey)
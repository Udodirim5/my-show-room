import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xjhkenxjugopupqnsjtg.supabase.co"; 
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqaGtlbnhqdWdvcHVwcW5zanRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3MzQ1OTIsImV4cCI6MjA1ODMxMDU5Mn0.AmZGfT_UOJlVLW2ojv8CFADJxZvKrFe_M8pLZmMaCAA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

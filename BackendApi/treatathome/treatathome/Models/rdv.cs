using System;

namespace treatathome.Models
{
    public class rdv
    {
        public int idrdv { get; set; }
        public int id_user { get; set; }
        public int id_infer_aux { get; set; }
        public string role_infer_aux { get; set; }
        public string subject { get; set; }
        public string status { get; set; }

        public DateTime date { get; set; }

    }
}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using treatathome.Models;

namespace treatathome.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public AuthController(IConfiguration configuration)
        {

            _configuration = configuration;
        }
        public DataTable GetUsers()
        {
            string query = @"
                   select * from dbo.users";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("TreatApp");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return table;
        }


        public string CheckUser(string userlogin, string userpsw)
        {

            var id = "";


            List<string> stringList = new List<string> { "string1", "string2" };
            foreach (DataRow row in this.GetUsers().Rows)
            {
                if (userlogin == row["useremail"].ToString() && userpsw == row["userpassword"].ToString())
                {
                    id = row["UserId"].ToString();


                }

            }
            return id;
        }
        public string UserRole(string userlogin, string userpsw)
        {


            var role = "";

            List<string> stringList = new List<string> { "string1", "string2" };
            foreach (DataRow row in this.GetUsers().Rows)
            {
                if (userlogin == row["useremail"].ToString() && userpsw == row["userpassword"].ToString())
                {

                    role = row["UserRole"].ToString();

                }

            }
            return role;
        }

        // GET api/values
        [HttpPost, Route("login")]
        public IActionResult Login([FromBody] users user)
        {
            if (user == null)
            {
                return BadRequest("Invalid client request");
            }
            if (CheckUser(user.useremail, user.userpassword) != "")
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("Super secret key"));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                var Claims = new List<Claim>
                     {
            new Claim(ClaimTypes.NameIdentifier,CheckUser(user.useremail, user.userpassword)),
            new Claim(ClaimTypes.Role,UserRole(user.useremail,user.userpassword))
                     };
                var tokeOptions = new JwtSecurityToken(
                    issuer: "http://localhost:44329",
                    audience: "http://localhost:44329",
                    claims: Claims,
                    expires: DateTime.Now.AddHours(5),
                    signingCredentials: signinCredentials


                );
                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return Ok(new { Token = tokenString });

            }
            else
            {
                return Unauthorized();
            }
        }
    }
}

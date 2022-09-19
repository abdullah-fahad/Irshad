import * as React from 'react';
import * as M from '@mui/material';
import * as Icons from '@mui/icons-material';
import {motion} from 'framer-motion';


export default function Login(){
    return (
        <motion.div animate={{opacity: "100%"}} initial={{opacity: "0%"}}>
            <M.Paper sx={{width: "100%", height: "400px", padding: "5%", marginTop: "9%"}}>
                <M.Typography>
                    <M.Typography variant='h6' sx={{textAlign: "center", marginTop: "10px"}}>
                        تسجيل الدخول
                    </M.Typography>
                    <br />
                    <M.Box sx={{ display: 'flex', alignItems: 'flex-end', width: "50%", margin: "auto" }}>
                        <Icons.AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize: "20px" }} />
                        <M.TextField type="number" size="small" fullWidth id="input-with-sx" label="رقم الهاتف" variant="standard" />
                    </M.Box>
                    <M.Box sx={{ display: 'flex', alignItems: 'flex-end', width: "50%", margin: "auto"  }}>
                        <Icons.Key sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize: "20px" }} />
                        <M.TextField type="password" size="small" fullWidth id="input-with-sx" label="كلمة المرور" variant="standard" />
                    </M.Box>
                    <br />
                    <M.Button size='small' sx={{marginTop: "10px"}} variant="contained" startIcon={<Icons.Send sx={{marginLeft: "5px"}} />}>
                        دخول
                    </M.Button>
                    <br />
                    <M.Link sx={{margin: "5px"}} href="/" color="inherit">
                        ليس لدي حساب
                    </M.Link>
                </M.Typography>
            </M.Paper>
        </motion.div>
    )
}